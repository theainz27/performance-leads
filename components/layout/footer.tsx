import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-4">
                            Performance<span className="text-secondary">Leads</span>
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            High-intent financial advice and pension leads for UK IFAs.
                            Grow your funds under management with our real-time, compliant, and cost-effective web leads.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-secondary shrink-0" />
                                <span>
                                    Performance Leads Ltd<br />
                                    66 Bootham,<br />
                                    York YO30 7BZ
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-secondary shrink-0" />
                                <a href="tel:07875572721" className="hover:text-white transition-colors">
                                    07875 572721
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-secondary shrink-0" />
                                <a href="mailto:support@performance-leads.co.uk" className="hover:text-white transition-colors">
                                    support@performance-leads.co.uk
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    Data Privacy & Protection Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <p className="mt-4 text-xs text-gray-500">
                                    &copy; {new Date().getFullYear()} Performance Leads Ltd. All rights reserved.
                                    <br />
                                    Registered in England & Wales.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
