import React from 'react'

const UplodePhoto =() =>{
    
    return (
        <div>
      <main class="container mx-auto max-w-screen-lg h-full">
        <article aria-label="File Upload Modal" class="relative h-full flex flex-col " ondrop="dropHandler(event);" ondragover="dragOverHandler(event);" ondragleave="dragLeaveHandler(event);" ondragenter="dragEnterHandler(event);">
          <section class="h-full overflow-auto p-8 w-full flex flex-col">
            <header class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
              <p class="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
              </p>
              <input id="hidden-input" type="file" multiple class="hidden" />
              <button id="button" class="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
                Upload a file
              </button>
            </header>

            <h1 class="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
              To Upload
            </h1>

            <ul id="gallery" class="flex flex-1 flex-wrap -m-1">
              <li id="empty" class="h-full w-full text-center flex flex-col justify-center items-center">
                <img class="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
                <span class="text-small text-gray-500">No files selected</span>
              </li>
            </ul>
          </section>
        </article>
      </main>
    </div>
            
    )
}
export default  UplodePhoto;