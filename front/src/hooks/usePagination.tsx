import React from "react";

const usePagination = (max: number) => {
  const [page, setPage] = React.useState(0);

  function goNext() {
    if (page + 1 < max) setPage(page + 1);
  }

  function goBack() {
    if (page - 1 >= 0) setPage(page - 1);
  }

  function goTo(target: number) {
    if (0 < target && target < max) setPage(target);
  }

  return { page, goNext, goBack, goTo };
};

export default usePagination;
