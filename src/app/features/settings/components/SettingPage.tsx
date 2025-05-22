'use client'

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Toggle } from "@/components/ui/toggle"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useSettingsStore } from "../../../store/store.setting"
import { toast } from "react-toastify"

const settingsSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  newsletter: z.boolean().optional(),
})

type SettingsFormValues = z.infer<typeof settingsSchema>

const SettingPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      name: "",
      email: "",
      newsletter: false,
    },
  })

  const { theme, setTheme } = useTheme();
  const updateSettings = useSettingsStore((state) => state.updateSettings);
  const name = useSettingsStore((state) => state.name);
  const email = useSettingsStore((state) => state.email);

  // Sync form values with zustand store
  React.useEffect(() => {
    setValue('name', name);
    setValue('email', email);
  }, [name, email, setValue]);

  const onSubmit = (data: SettingsFormValues) => {
    updateSettings({ name: data.name, email: data.email });
    if (isSubmitSuccessful) toast.success("Update");
    
  }

  return (
    <div className="p-8">
      <label className="col-span-2 text-[30px] font-semibold">Settings</label>
      <Card className="mx-auto mt-10 bg-card border rounded-xl p-8 shadow-sm">
        <div className="flex justify-end mb-4">
          <Toggle
            pressed={theme === "dark"}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
            className="w-12 h-10"
          >
            {theme === "dark" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </Toggle>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Input
              id="name"
              label="Name"
              type="text"
              error={errors.name?.message}
              placeholder="Your name"
              {...register("name")}
              onChange={(e) => setValue("name", e.target.value)}
            />
          </div>
          <div>
            <Input
              id="email"
              label="Email"
              type="email"
              error={errors.email?.message}
              placeholder="you@example.com"
              {...register("email")}
              onChange={(e) => setValue("email", e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              id="newsletter"
              type="checkbox"
              {...register("newsletter")}
              className="accent-primary"
            />
            <label htmlFor="newsletter" className="text-sm">
              Subscribe to newsletter
            </label>
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              variant={'default'}
              className="w-40 "
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default SettingPage