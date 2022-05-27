const Image = () => {
    return (
      <a href='#' className='group'>
        <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
          <img 
            alt="" 
            src="https://avatars.githubusercontent.com/u/75937850?v=4"
            className="group-hover:opacity-75"
          />
          <h3 className="mt-4 text-sm text-gray-700">BossDaily</h3>
          <p className="mt-1 text-lg font-medium text-gray-900"> The goat</p>
        </div>
      </a>
    )
  }