

import Link from "next/link"
import Mobile from "./mobile"

const MarketingMenu = [
    {
        label: "Accueil",
        href: "/",
    },
    {
        label: "Contact",
        href: "/contact",
    }
]


export default async  function Header() {

    const Menu = MarketingMenu

    return (
        <header className="relative bg-transparent">

            <div className="hidden md:flex items-center justify-between h-16 px-4 max-w-[1400px] mx-auto">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex-shrink-0">
                        Logo
                    </Link>
                    <nav>
                        <ul className="flex items-center gap-8">
                            {
                                Menu.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-sm  text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))
                            }

                        </ul>
                    </nav>

                </div>
            </div>
            <Mobile />


        </header>
    )
}

