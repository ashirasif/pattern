
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ShoppingCartIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function Navbar () {
  return (
    <>
      <nav
        className={`mb-2 w-full lg:bg-background`}
      >
        <div className="mx-auto flex max-w-screen-xl flex-row items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/yeezy.jpg" className="h-16 w-16 object-scale-down" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link to={"/cart"}>
              <Button size="icon" variant="ghost">
                <ShoppingCartIcon className="w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      <Separator />

    </>
  );
}
