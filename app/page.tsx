"use client";

import { useState } from "react";
import { getSkinDisease } from "./action";

export default function Home() {
	const [image, setImage] = useState<any>("");
	function handleSubmit(e: any) {
		e.preventDefault();
		if (!image) return;
		console.log(image);
		getSkinDisease(image);
	}

	return (
		<div className="bg-blue-100">
			<div className="h-screen space-y-8 font-sans w-3/4 mx-auto text-center flex flex-col justify-center items-center">
				<h2 className="text-2xl font-bold">Which Skin Disease Is This?</h2>
				<form onSubmit={handleSubmit}>
					<div className="relative size-44 p-2 flex justify-center items-center border-2 border-black mx-auto border-dotted rounded-lg">
						<label
							htmlFor="image"
							className="text-center hover:bg-slate-600 bg-black text-white cursor-pointer rounded-lg p-2 text-lg font-semibold   w-full mx-auto"
						>
							Upload Skin Disease Image
						</label>
						<input
							type="file"
							accept="image/*"
							id="image"
							name="image"
							onChange={(e: any) => {
								console.log(e.target.files[0]);
								setImage(e.target.files[0].name);
							}}
							hidden
							className="absolute  right-0 left-0 "
						/>
					</div>
					<button>Upload</button>
				</form>
			</div>
		</div>
	);
}
