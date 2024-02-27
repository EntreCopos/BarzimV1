import { redirect } from "next/navigation"

const oBarzim = async () => {
    redirect('https://dev.barzim.tech/')

    return (
        <div >
            <p>sup</p>
        </div>
    )
}

export default oBarzim