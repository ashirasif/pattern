import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { pageAtom, productsPerPageAtom, totalPagesAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import { Button } from "./ui/button"
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"

export default function Pagination() {

  const [page, setPage] = useAtom(pageAtom)
  const [, setProductsPerPage] = useAtom(productsPerPageAtom)
  const [totalPages] = useAtom(totalPagesAtom)

  function handleNextPage() {
    setPage((p) => p - 1)
  }

  function handlePrevPage() {
    setPage((p) => p + 1)
  }

  return (
    <div className='flex gap-4 items-center justify-between'>
      <div className='flex items-center gap-2'>
        <p>Products per page</p>
        <Select defaultValue='5' onValueChange={(v) => setProductsPerPage(parseInt(v))}>
          <SelectTrigger className="w-fit">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className='flex gap-2 items-center'>
        <Button onClick={handleNextPage} size="icon" variant="ghost" disabled={page===1}>
          <ArrowLeftIcon className='w-6 h-6' />
        </Button>
        <p>Page {page} of {totalPages}</p>
        <Button onClick={handlePrevPage} size="icon" disabled={page === totalPages} variant="ghost">
          <ArrowRightIcon className='w-6 h-6' />
        </Button>
      </div>
    </div>
  )
}

