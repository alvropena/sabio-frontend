import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { SettingsDropdown } from "./settings-dropdown"
import { Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

const decks = [
    {
        deck: "Economics",
        new: 47,
        learn: 7,
        due: 53,
    },
    {
        deck: "Italian",
        new: 69,
        learn: 5,
        due: 31,
    },
    {
        deck: "Math",
        new: 36,
        learn: 4,
        due: 0,
    },
]

export function TableDemo() {
    return (
        <Table className="mt-4">
            <TableCaption>Studied 0 cards in 0 seconds today (0s/card).</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead></TableHead>
                    <TableHead>Deck</TableHead>
                    <TableHead>New</TableHead>
                    <TableHead>Learn</TableHead>
                    <TableHead>Due</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {decks.map((deck) => (
                    <TableRow key={deck.deck}>
                        <TableCell>
                            <button>
                                <Plus size={16} strokeWidth={1.5} />
                            </button>
                        </TableCell>
                        <TableCell className="font-medium">
                            <Link href={"/deck"}>
                                <Button variant={'link'}>
                                {deck.deck}
                                </Button>
                            </Link>
                        </TableCell>
                        <TableCell>{deck.new}</TableCell>
                        <TableCell>{deck.learn}</TableCell>
                        <TableCell className="text-right">{deck.due}</TableCell>
                        <TableCell className="text-right">
                            <button>
                                <SettingsDropdown />
                            </button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
