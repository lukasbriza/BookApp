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

interface bookOverviewProps {
    id: string | number,
    name: string,
    author: string,
    description: string
}