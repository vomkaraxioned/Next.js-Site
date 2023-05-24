import Link from 'next/link';

const Header = ({navLink,homePageLink}:any) => {

    return (
        <header>
            <h1 className=''><Link href={homePageLink?.slug} title={homePageLink?.title}>
                {homePageLink?.title}
                </Link></h1>
            <nav className=''>
                <ul className=''>
                    {
                        navLinks?.map((navLink:any)=>
                        <li className=''><Link href={'#FIXME'} title={'temp'}/></li>
                        )
                    }
                </ul>
            </nav>
        </header>
    )
}