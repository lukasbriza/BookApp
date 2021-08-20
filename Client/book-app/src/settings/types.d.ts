type bookType = {
    _id: any,
    name: string,
    author: string,
    description?: string
}

type bookProps = {
    id: string,
    name: string,
    author: string,
    description?: string
}

type id = string;

type findBookProps = string | undefined;

type bookOverviewProps = {
    id: string | number,
    name: string,
    author: string,
    description?: string
}

type bookOverviewState = {
    id: string | number |null,
    name: string |null,
    author: string |null,
    description?: string | null
}

type editPageProps = {
    id: string | number,
    name: string,
    author: string,
    description?: string | null
}

type addBookProps = {
    name: string,
    author: string,
    description?: string | null
}

type registrationObj = {
    userName: string,
    password: string,
    url: string
}
