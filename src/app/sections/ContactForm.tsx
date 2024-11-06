"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  businessEmail: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number is required"),
  website: z.string().url("Invalid URL").optional().or(z.literal("")),
  webDevelopment: z.string().optional(),
  monthlySpend: z.string().optional(),
  google: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Component() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      businessEmail: "",
      phoneNumber: "",
      website: "",
      webDevelopment: "",
      monthlySpend: "",
      google: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    // Here you would typically send the data to your backend
    alert("Form submitted successfully!");
    form.reset();
  };

  //bg-gradient-to-bl from-[#A100FF] to-[#21005E]

  return (
    <div className="bg-[#0A0219] bg-contact-form-bg p-4 md:px-8 md:py-12 lg:px-16 lg:py-24">
      <Card className="w-full bg-white px-16 py-24 rounded-[3rem]">
        <CardHeader className="space-y-2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-9xl font-semibold text-[#21005E]">
            NEED PROJECT HELP?{" "}
            <span className="text-[#A100FF] bg-clip-text">{"LET'S TALK!"}</span>
          </h1>
        </CardHeader>
        <Form {...form}>
          <form className="relative" onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="border-0 shadow-none bg-card-mask bg-no-repeat bg-cover overflow-hidden">
              <CardContent className="relative p-0 px-6 pb-16 pt-14 mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-6">
                {/* <div
                  className="absolute top-0 left-0 w-full h-full rounded-xl z-0"
                  style={{
                    background:
                      "linear-gradient(204.5deg, #A100FF -30.8%, #21005E 71.34%)",
                  }}
                /> */}
                <div className="z-10 space-y-2">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white border-0"
                            placeholder="FULL NAME*"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white border-0"
                            placeholder="BUSINESS EMAIL*"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-white border-0"
                            placeholder="PHONE NUMBER*"
                            type="tel"
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
                            className="bg-white border-0"
                            placeholder="WEBSITE"
                            type="url"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="webDevelopment"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white border-0">
                              <SelectValue placeholder="WEB DEVELOPMENT" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="wordpress">
                              WordPress Development
                            </SelectItem>
                            <SelectItem value="react">
                              React Development
                            </SelectItem>
                            <SelectItem value="fullstack">
                              Full Stack Development
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="z-10 space-y-2 flex flex-col">
                  <FormField
                    control={form.control}
                    name="monthlySpend"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white border-0">
                              <SelectValue placeholder="MONTHLY ADVERTISING SPEND" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1000">
                              $1,000 - $5,000
                            </SelectItem>
                            <SelectItem value="5000">
                              $5,000 - $10,000
                            </SelectItem>
                            <SelectItem value="10000">$10,000+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="google"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white border-0">
                              <SelectValue placeholder="GOOGLE" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ads">Google Ads</SelectItem>
                            <SelectItem value="analytics">
                              Google Analytics
                            </SelectItem>
                            <SelectItem value="search">
                              Search Console
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormControl>
                          <Textarea
                            className="bg-white border-0 grow h-full"
                            placeholder="MESSAGE"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="z-10 flex justify-end mt-6 col-span-2">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-500 hover:to-emerald-500 text-black font-semibold px-6 py-8 rounded-2xl"
                    style={{
                      background: `linear-gradient(81.55deg, #DBEF33 12.1%, #60EA5B 65.02%, #32E2CF 101.37%)`,
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "SUBMITTING..." : "GET IN TOUCH"}
                    <div className="w-10 h-10 rounded-full flex justify-center items-center bg-white pr-1 text-base">
                      <Image
                        src={"/icons/right-arrow.svg"}
                        alt={"right arrow"}
                        width={25}
                        height={25}
                      />
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </Form>
      </Card>
      <div className="w-full mt-48 flex flex-col justify-center items-center space-y-24">
        <p className="max-w-[60%] text-white text-lg md:text-xl lg:text-2xl text-center">
          Filling out the form above is the fastest way to get an answer, but
          you can also schedule a call in the upcoming days if you prefer.
        </p>
        <div className="w-[60%] flex flex-row justify-center items-center">
          <div className="bg-[#D9D8DD] h-px grow mr-2 ml-2 lg:ml-20 lg:mr-4 m-auto" />
          <p className="text-[#D9D8DD] text-lg">or</p>
          <div className="bg-[#D9D8DD] h-px grow ml-2 mr-2 lg:mr-20 lg:ml-4 m-auto" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto p-6 gap-16 border rounded-full bg-white">
          <div className="flex items-center gap-6">
            <div className="relative h-24 w-24">
              {/* Bottom left avatar */}
              <Avatar className="absolute bottom-0 left-0 h-14 w-14 border-4 border-[#0A0219]">
                <AvatarImage
                  src="/images/avatar1.png"
                  alt="Avatar 2"
                />
              </Avatar>

              {/* Bottom right avatar */}
              <Avatar className="absolute bottom-0 right-0 h-14 w-14 border-4 border-[#0A0219]">
                <AvatarImage
                  src="/images/avatar2.png"
                  alt="Avatar 1"
                />
              </Avatar>

              {/* Top avatar */}
              <Avatar className="absolute left-1/2 top-0 h-14 w-14 -translate-x-1/2 border-4 border-[#0A0219]">
                <AvatarImage
                  src="/images/avatar3.png"
                  alt="Avatar 3"
                />
              </Avatar>
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent">
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #0C03AD 0%, #050337 100%)",
                  }}
                >
                  Want to jump on a call?
                </span>
              </h2>
              <p className="text-xl md:text-lg text-[#21005E]">
                Book a 30 minute call
              </p>
            </div>
          </div>
          <Button
            type="submit"
            className="bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-500 hover:to-emerald-500 text-black font-semibold px-6 py-8 rounded-2xl"
            style={{
              background: `linear-gradient(81.55deg, #DBEF33 12.1%, #60EA5B 65.02%, #32E2CF 101.37%)`,
            }}
            disabled={isSubmitting}
          >
            {isSubmitting ? "SUBMITTING..." : "BOOK A CALL"}
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-white pr-1 text-base">
              <Image
                src={"/icons/right-arrow.svg"}
                alt={"right arrow"}
                width={25}
                height={25}
              />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
