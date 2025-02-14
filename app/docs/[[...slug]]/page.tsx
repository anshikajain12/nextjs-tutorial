export default function Docs({
    params,
}: {
    params: {
        slug: string[];
    }
}) {
    if (params.slug?.length === 2) {
        return <h1>
            viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
        </h1>
    }
    else if (params.slug?.length === 1) {
        return <h1>
            viewing docs for feature {params.slug[0]}
        </h1>
    }
    return <h1> Docs home page</h1>
}
//http://localhost:3000/docs->default
//http://localhost:3000/docs/example1->length1
//http://localhost:3000/docs/example1/feature1->length2