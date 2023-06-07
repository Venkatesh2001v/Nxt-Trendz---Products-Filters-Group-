import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="input-container">
        <input
          type="search"
          value={searchInput}
          className="user-input"
          placeholder="Search"
          onChange={onChangeInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachCatogory => {
      const {activeCategoryId, changeCategory} = props
      const onClickCategory = () => changeCategory(eachCatogory.categoryId)
      const isActive = eachCatogory.categoryId === activeCategoryId
      const className = isActive
        ? 'category-name active-category'
        : 'category-name'

      return (
        <li
          className="category-item"
          key={eachCatogory.categoryId}
          onClick={onClickCategory}
        >
          <p className={className}>{eachCatogory.name}</p>
        </li>
      )
    })
  }

  const renderCatogoryListItems = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="product-catogory-list">{renderCategoriesList()}</ul>
    </>
  )

  const renderRatingListItems = () => {
    const {ratingsList, changeRating} = props

    return ratingsList.map(eachRating => {
      const {activeRatingId} = props
      const onClickRating = () => changeRating(eachRating.ratingId)
      const isActive = activeRatingId === eachRating.ratingId
      const className = isActive ? `and-up active-rating` : `and-up`

      return (
        <li
          className="ratings-list"
          key={eachRating.ratingId}
          onClick={onClickRating}
        >
          <img
            src={eachRating.imageUrl}
            className="rating-image"
            alt={`rating ${eachRating.ratingId}`}
          />
          <p className={className}>& up</p>
        </li>
      )
    })
  }

  const renderRatingItems = () => (
    <>
      <h1 className="rating-heading">Ratings</h1>
      <ul className="ratings-list-container">{renderRatingListItems()}</ul>
    </>
  )

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderCatogoryListItems()}
      {renderRatingItems()}
      <button className="cleat-btn" onClick={clearFilters} type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
