import React from 'react'

function NotesCard(
    { note }
) {
  return (
    <div>
        <div
              key={note._id}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow !p-5 flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-4xl font-bold text-gray-800">{note.title}</h2>
                {true /*note.verified*/ && (
                  <span className="!px-2 !py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
                    Verified
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 line-clamp-3 !pt-3 font-normal border-b-2 border-gray-200 !pb-1.5">{note.description}</p>

              {/* Info section */}
              <div className="!mt-4 text-sm text-gray-500 space-y-1">
                <div className="flex flex-row w-full gap-10 justify-around items-center">
                  <div>
                  <p><span className="font-semibold">Subject:</span> {note.subject}</p>
                <p><span className="font-semibold">Department:</span> {note.department}</p>
                </div>
                
                <div>
                  <p><span className="font-semibold">University:</span> {note.university}</p>
                <p><span className="font-semibold">Semester:</span> {note.semester}</p>
                </div>
                </div>

                <p className="w-full text-center !p-3 !mb-2 rounded-2xl bg-gray-100 !mt-2"><span className="font-semibold ">Uploaded By:</span> {note.uploadedBy}</p>
              </div>

              {/* Footer */}
              <div className="w-full flex justify-end items-center gap-1.5">
                <a
                href={note.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-[#cddafa] !text-[#545253] text-sm font-medium !px-4 !py-2 rounded-lg hover:bg-blue-500 hover:!text-white transition w-[50%] "
                >
                View / Download
              </a>
                <a
                href={note.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-center bg-[#ded4fa] !text-[#545253] text-sm font-medium !px-4 !py-2 rounded-lg hover:bg-[#ad91fa] transition w-[50%] hover:!text-white"
                >
                View / Download
              </a>
              </div>
                <p className="text-xs text-end !mt-2 opacity-45"><span className="">Uploaded At</span> {new Date(note.createdAt).toLocaleDateString()}</p>
            </div>
    </div>
  )
}

export default NotesCard