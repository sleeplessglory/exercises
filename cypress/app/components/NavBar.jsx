import NavItem from "./NavItem"

const navItems = [
    {
    label: 'Why Cypress?',
    path: '/',
    refAttr: 'nav-why-cypress'
    },
    {
    label: 'Overview',
    path: '/overview',
    refAttr: 'nav-overview'
    },
    {
    label: 'Fundamentals',
    path: '/fundamentals',
    refAttr: 'nav-fundamentals'
    },
    {
    label: 'Forms',
    path: '/forms',
    refAttr: 'nav-forms'
    },
    {
    label: 'Examples',
    path: '/examples',
    refAttr: 'nav-examples'
    },
    {
    label: 'Component',
    path: '/component',
    refAttr: 'nav-component'
    },
    {
    label: 'Best Practices',
    path: '/best-practices',
    refAttr: 'nav-best-practices'
    },
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem 
                    key={item.label} 
                    label={item.label} 
                    path={item.path}
                    refAttr={item.refAttr} />
                ))
            }
        </ul>
    )
}