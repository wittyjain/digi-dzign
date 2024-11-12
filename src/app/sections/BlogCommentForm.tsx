"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  website: z
    .string()
    .url({ message: "Invalid URL." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  saveInfo: z.boolean().default(false),
});

export default function BlogCommentForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      website: "",
      message: "",
      saveInfo: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <div className="w-full lg:max-w-[765px] space-y-6 my-8 lg:my-12 xl:my-16">
      <h2 className="text-4xl font-medium text-[#21005E]">Leave a Reply</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="FULL NAME *"
                    className="h-14 rounded-full border-[#E5D8FF] placeholder:text-[#2D0173] focus-visible:ring-[#2D0173]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="EMAIL ADDRESS *"
                    type="email"
                    className="h-14 rounded-full border-[#E5D8FF] placeholder:text-[#2D0173] focus-visible:ring-[#2D0173]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="WEBSITE"
                    type="url"
                    className="h-14 rounded-full border-[#E5D8FF] placeholder:text-[#2D0173] focus-visible:ring-[#2D0173]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="MESSAGE"
                    className="min-h-[200px] rounded-3xl border-[#E5D8FF] placeholder:text-[#2D0173] focus-visible:ring-[#2D0173]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="saveInfo"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-[#E5D8FF] data-[state=checked]:bg-[#2D0173]"
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <span className="text-sm text-[#6E6E6E]">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </span>
                </div>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-500 hover:to-emerald-500 text-black font-semibold px-12 md:px-6 py-8 rounded-full w-full md:w-fit flex justify-between"
            style={{
              background: `linear-gradient(81.55deg, #DBEF33 12.1%, #60EA5B 65.02%, #32E2CF 101.37%)`,
            }}
            disabled={false}
          >
            <span>GET IN TOUCH</span>
            <span className="w-10 h-10 rounded-full flex justify-center items-center bg-white pr-1 text-base">
              <Image
                src={"/icons/right-arrow.svg"}
                alt={"right arrow"}
                width={25}
                height={25}
              />
            </span>
          </Button>
        </form>
      </Form>
    </div>
  );
}
