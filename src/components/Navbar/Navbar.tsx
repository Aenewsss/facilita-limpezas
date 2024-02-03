"use client"
import { PagesEnum, PagesPathnameEnum } from "@/enums/pages.enum";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname()

    return pathname != PagesPathnameEnum.HOME &&
        <div className="container mt-3">
            <Link href={PagesPathnameEnum.HOME} className="fw-normal">{PagesEnum.HOME}</Link>
            <Link href={pathname == PagesPathnameEnum.CALCULATION ? PagesPathnameEnum.CALCULATION : PagesPathnameEnum.CUSTOMERS} className="fw-bold">&nbsp;/&nbsp;{pathname == PagesPathnameEnum.CALCULATION ? PagesEnum.CALCULATION : PagesEnum.CUSTOMERS}</Link>
        </div>

}

export default Navbar;