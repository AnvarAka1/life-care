exports.getPagination = ({ page, count }, itemsPerPage) => {
  const currentPage = parseInt(page)
  const pageCount = Math.ceil(count / itemsPerPage)

  const prevPage = currentPage > 1 ? currentPage - 1 : null
  const nextPage = pageCount !== currentPage ? currentPage + 1 : null
  const skipValue = (currentPage - 1) * itemsPerPage

  const view = { count, currentPage, prevPage, nextPage, pageCount }

  return { view, skipValue }
}
