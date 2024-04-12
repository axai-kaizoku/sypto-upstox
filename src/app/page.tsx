import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex justify-center items-center w-full h-[90vh]">
			<Link
				href="/profile"
				className="text-xl p-6 shadow-lg rounded-md bg-white text-black ">
				Dashboard
			</Link>
		</main>
	);
}
