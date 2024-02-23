import { Logo } from "@/components/logos/logo-barzim"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Custom404() {
    return (
        <div className="bg-[url('https://res.cloudinary.com/barzimtech/image/upload/v1707588745/wplegnjrdeqrm7gayfgx.png')] bg-cover min-h-svh">
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
        </div>
    )
}