import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Custom404() {
    return (
        <body className="bg-[url('https://res.cloudinary.com/dvprux49g/image/upload/v1707588745/wplegnjrdeqrm7gayfgx.png')] bg-cover">
            <main className="flex justify-center items-center h-[60svh]">
                <div className="flex flex-col items-center gap-7">.
                    <Logo variant="secondary" width={200} />
                    <h1 className="text-white font-medium">Achamos que você bebeu demais. Essa página não existe.</h1>
                    <Link href={'/'}>
                        <Button variant={"secondary"} type="button" className="w-full" size={"lg"}>
                            Voltar ao Barzim
                        </Button>
                    </Link>
                </div>
            </main>
        </body>
    )
}