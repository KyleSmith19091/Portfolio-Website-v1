import { useRef, useState } from 'react';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef(null);
	const ESCAPE_KEY_CODE = 27;
	
	const onMenuButtonClicked = () => {
		console.log("A Menu Icon has been clicked!");
		!menuOpen ? menuRef.current.classList.add('open') : menuRef.current.classList.remove('open');
		!menuOpen ? document.querySelector("body").classList.add('stopScrolling') : document.querySelector("body").classList.remove('stopScrolling');
		setMenuOpen(!menuOpen);
	};

	const onEscapedKeyDown = (e) => {
		if(menuOpen && e.keyCode === ESCAPE_KEY_CODE) {
			menuRef.current.classList.remove('open');
			document.querySelector("body").classList.remove('stopScrolling');
		}
	};

	return (
		<nav className="flex items-center justify-between py-3 sm:py-5 pl-3 pr-1 sm:pl-10 sm:pr-10" onKeyDown={onEscapedKeyDown}>
			<Link href="/">
				<a className="link font-main font-bold text-base sm:text-lg">
					Kyle S.
				</a>
			</Link>
			<button onClick={onMenuButtonClicked} className="mr-3 menuIcon xs:w-6 xs:h-6"></button>
			<div ref={menuRef} className="cover">
				<div className="flex p-5 items-center justify-between">
					<h1 className="font-main font-bold text-white">Kyle S.</h1>
					<button onClick={onMenuButtonClicked} className="mr-3 menuIcon border-white before:bg-white xs:w-6 xs:h-6"></button>
				</div>
				<div className="w-full mt-10">
					<ul className="flex flex-col font-main font-bold text-white text-3xl md:text-4xl lg:text-6xl space-y-10 pl-5 pr-5 sm:pl-32 sm:pr-32 menuOptions">
						<ScrollLink className="cursor-pointer" onClick={onMenuButtonClicked} to="aboutMe" spy={true} smooth={true} delay={300} duration={800}><li className="menuOption">About Me</li></ScrollLink>
						<ScrollLink className="cursor-pointer" onClick={onMenuButtonClicked} to="work" spy={true} smooth={true} delay={300} duration={800}><li className="menuOption">Work I've Done</li></ScrollLink>
						<ScrollLink className="cursor-pointer" onClick={onMenuButtonClicked} to="favProject" spy={true} smooth={true} delay={300} duration={800}><li className="menuOption">What I've Built</li></ScrollLink>
						<ScrollLink className="cursor-pointer" onClick={onMenuButtonClicked} to="otherProject" spy={true} smooth={true} delay={300} duration={800}><li className="menuOption">Other Awesome Projects</li></ScrollLink>
						<ScrollLink className="cursor-pointer" onClick={onMenuButtonClicked} to="contactMe" spy={true} smooth={true} delay={300} duration={800}><li className="menuOption">Contact Me</li></ScrollLink>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar