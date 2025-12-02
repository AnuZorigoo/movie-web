import { Button } from "@/components/ui/button";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { use, useEffect, useState } from "react";
import { Response } from "../category/[categoryName]/page";

export const PaginationSection = (props) => {
  const { setCurrentPage, currentPage, totalPages } = props;
  const nextPage = () => {
    setCurrentPage((prev: number) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev: number) => prev - 1);
  };

  return (
    <div className="flex justify-end">
      <PaginationContent className="w-fit m-0">
        <PaginationContent>
          <PaginationItem>
            <Button
              variant="secondary"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              {" "}
              <ChevronLeft />
              Previous
            </Button>
          </PaginationItem>

          {currentPage > 1 && (
            <PaginationItem>
              <PaginationEllipsis></PaginationEllipsis>
            </PaginationItem>
          )}

          {currentPage > 1 && (
            <PaginationItem>
              <Button variant="secondary" onClick={prevPage}>
                {currentPage - 1}
              </Button>
            </PaginationItem>
          )}

          <PaginationItem>
            <Button variant="secondary" className="border">
              {currentPage}
            </Button>
          </PaginationItem>

          <PaginationItem>
            <Button variant="secondary" onClick={nextPage}>
              {currentPage + 1}{" "}
            </Button>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis></PaginationEllipsis>
          </PaginationItem>

          <PaginationItem>
            <Button variant="secondary">{totalPages} </Button>
          </PaginationItem>

          <PaginationItem>
            <Button
              variant="secondary"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </PaginationContent>
    </div>
  );
};
