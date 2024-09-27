"use server";
export async function getSkinDisease(image: any) {
	const url =
		"https://detect-skin-disease.p.rapidapi.com/facebody/analysis/detect-skin-disease";

	console.log(image.name);
	const options: any = {
		method: "POST",
		headers: {
			"x-rapidapi-key": "bc616df431mshf6fe1a845dea859p1f174fjsnc5e5fea666db",
			"x-rapidapi-host": "detect-skin-disease.p.rapidapi.com",
		},
		body: {
			image: image.name,
		},
	};
	try {
		console.log(image);
		const response = await fetch(url, options);
		if (!response.ok) throw new Error("There was a problem connecting api");
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}
