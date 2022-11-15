type PostListResult = {
	title: string,
	thumbnailUrl: string,
	description: string,
};

type Post = {
	title: string,
	imageUrl: string,
	description: string,
};

export const fetchArtistPostList = async (start, stop): PostListResult[] => {
	// TODO: implement
	let postSample = fetchArtistPost(0);
	let sampleList = []

	for (let i = 0; i < stop - start; i++) {
		sampleList.push(postSample);
	}	

	return sampleList
}

const fetchArtistPost = (id): Post => {
	// TODO: implement
	return {
		title: "Krew",
		imageUrl: "/krew_sample.jpg",
		description: "Krew is nae nae",
	}
}

const fetchNewsPostList = (start, stop): PostListResult[] => {
	// TODO: implement
	
}

const fetchNewsPost = (id): Post => {
	// TODO: implement
	
}

// TODO: add post search features

enum PostType {
	Artist = "artist",
	News = "news",
}
