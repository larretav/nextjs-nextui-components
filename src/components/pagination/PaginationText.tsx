import React from 'react';

type Props = {
    itemsPerPage: number,
    page: number,
    totalItems: number
    totalFilteredItems?: number
}

const PaginationText = ({ itemsPerPage, page, totalItems, totalFilteredItems }: Props) => {
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
      Mostrando registros del {startIndex} al {endIndex} de un total de {totalItems} <br />
      {totalFilteredItems && `Filtrados de un total de ${totalFilteredItems}`}
    </span>
  );
};

export default PaginationText;