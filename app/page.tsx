import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, TrendingUp, MessageSquare, Cpu } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight font-heading sm:text-6xl mb-6">
              Use Lead Generation <br />to grow your financial advice business
            </h1>
            <p className="text-lg leading-8 text-gray-200 mb-8">
              Supplying reliable, compliant, cost effective leads to Partners across the Industry since 2017.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="https://calendly.com/pete-yates-head-of-partnerships-performance-leads-high-intent-client-acquisition/" target="_blank">
                Book a Meeting
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold font-heading text-primary mb-2">150K</div>
              <p className="text-gray-600">Consumers Matched with Advisers</p>
            </div>
            <div>
              <div className="text-5xl font-bold font-heading text-primary mb-2">1000</div>
              <p className="text-gray-600">Partners</p>
            </div>
            <div>
              <div className="text-5xl font-bold font-heading text-primary mb-2">60</div>
              <p className="text-gray-600">Years of Digital Marketing Expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight font-heading sm:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              We specialise in high quality customer acquisition specifically for the financial market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:scale-105 transition-transform">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Your Growth Partner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  High intent web leads delivered in real time from our online partner portal
                  to both yourself and the consumer.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Our Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">17 Years in the making</p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our people and our proprietary technology enable us to create cohesive customer acquisition
                  strategies that maximise growth and ROI for our partner businesses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">
            What partners are saying about us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="pt-6">
                <p className="text-gray-200 italic">
                  "Taking the leads was the best business decision I've made...I've had 22 leads so far
                  and it looks like I will be doing business with 12 of them. Overall I am astonished
                  at the quality of the leads...thank you for all you're doing."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="pt-6">
                <p className="text-gray-200 italic">
                  "I have used various Lead Generation companies in the past with very mixed results.
                  I have found Performance Leads to be certainly the best in results from appointments
                  booked and converted."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-heading text-center mb-12">FAQs</h2>
          <div className="space-y-6">
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2 flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                How long is the notice period to stop leads?
              </h3>
              <p className="text-gray-600 ml-7">
                7 days. By comparison, competitors have contractual tie-ins of between 28 days and 3 months.
              </p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2 flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                How often do you Invoice?
              </h3>
              <p className="text-gray-600 ml-7">By DD mandate, weekly in arrears.</p>
            </div>
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold mb-2 flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-1" />
                What is your lead replacement policy?
              </h3>
              <p className="text-gray-600 ml-7">
                - No working ringtone<br />
                - Clearly invalid name - Daffy Duck etc<br />
                - For leads where pot size has been gathered, the lead has less than £50k in investible assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-3xl text-center px-6">
          <h2 className="text-3xl font-bold font-heading mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Book a meeting with our team to discuss your growth strategy.</p>
          <Button asChild size="lg" variant="outline" className="bg-white text-secondary hover:bg-gray-100">
            <Link href="https://calendly.com/pete-yates-head-of-partnerships-performance-leads-high-intent-client-acquisition/" target="_blank">
              Book a Meeting
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
