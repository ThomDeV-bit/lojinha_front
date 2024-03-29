export type ProductType = {
	id: string

	name: string

	price: number

	quantity: number

	categorie: CategorieType[]

	image: ImageType[] | any 

}

export type CategorieType = {
	id: string
	name: string
}

export type ImageType = {
	id: string
	image: {
		type: "Buffer"
		data: []
	}
}