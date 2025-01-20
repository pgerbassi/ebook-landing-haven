import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface ContentFormProps {
  section: string;
  fields: {
    name: string;
    type: "text" | "textarea" | "json" | "array";
    label: string;
  }[];
}

export const ContentForm = ({ section, fields }: ContentFormProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<Record<string, any>>({});

  const { data, isLoading } = useQuery({
    queryKey: [section],
    queryFn: async () => {
      const { data, error } = await supabase
        .from(section)
        .select("*")
        .single();
      
      if (error) throw error;
      setFormData(data);
      return data;
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (newData: typeof formData) => {
      const { error } = await supabase
        .from(section)
        .update(newData)
        .eq('id', data.id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [section] });
      toast({
        title: "Success",
        description: "Content updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData);
  };

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.name} className="space-y-2">
          <Label htmlFor={field.name}>{field.label}</Label>
          {field.type === "textarea" ? (
            <Textarea
              id={field.name}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="min-h-[100px]"
            />
          ) : field.type === "json" ? (
            <Textarea
              id={field.name}
              value={JSON.stringify(formData[field.name] || {}, null, 2)}
              onChange={(e) => {
                try {
                  const parsed = JSON.parse(e.target.value);
                  handleChange(field.name, parsed);
                } catch (error) {
                  // Allow invalid JSON while typing
                }
              }}
              className="font-mono text-sm min-h-[200px]"
            />
          ) : field.type === "array" ? (
            <Textarea
              id={field.name}
              value={(formData[field.name] || []).join("\n")}
              onChange={(e) => handleChange(field.name, e.target.value.split("\n").filter(Boolean))}
              className="min-h-[150px]"
            />
          ) : (
            <Input
              id={field.name}
              value={formData[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          )}
        </div>
      ))}
      <Button type="submit" disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Save Changes
      </Button>
    </form>
  );
};