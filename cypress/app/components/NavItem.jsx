import Link from "next/link"

export default function NavItem({label, path, refAttr}){
    return (
        <Link ref-attr={refAttr} href={path}>
            {label}
        </Link>
    )
}