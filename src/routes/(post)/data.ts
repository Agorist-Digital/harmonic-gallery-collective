export type Post = {
	title: string,
	imgUrl: string,
	description: string,
	tags?: string[],
};

const fetchArtistPost = async (id): Post => {
	// TODO: Load artists from datasource (CMS)

	return {
		title: "Krew",
		imgUrl: "/krew_sample.jpg",
		description: "Krew is nae nae.",
		tags: ["rock", "indie"],
	};
}

export const loadPost = {
	"artist": fetchArtistPost,
}
