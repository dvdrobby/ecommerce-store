import Link from "next/link"

import Container from "@/components/ui/container" 
import MainNav from "@/components/main-nav"

const Navbar = () => {
  return (
    <div className="border-b">
        <Container>
            <div className="flex items-center h-16 px-4 sm:px-6 lg:px-8 relative">
                <Link
                    href='/'
                    className="ml-4 flex lg:ml-0 gap-x-2"
                >
                    <p className="text-xl font-bold">STORE</p>
                </Link>  
                <MainNav data={[]}/>
            </div>           
        </Container>
    </div>
  )
}

export default Navbar