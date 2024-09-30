import React from 'react';

type Props = {
    itemsPerPage: number,
    page: number,
    totalItems: number
}

const PaginationText = ({ itemsPerPage, page, totalItems }: Props) => {
  if (totalItems === 0) {
    return (
      <span className="text-xs self-center">
        No se encontraron elementos.
      </span>
    );
  }

  const startIndex = (page - 1) * itemsPerPage + 1;
  const endIndex = Math.min(page * itemsPerPage, totalItems);

  return (
    <span className="text-xs self-center">
      {startIndex} - {endIndex} de un total de {totalItems}
    </span>
  );
};

export default PaginationText;