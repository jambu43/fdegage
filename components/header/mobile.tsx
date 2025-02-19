'use client'
import Drawer from './drawer'

function Mobile() {
    return (
        <div className="relative z-10 md:hidden flex items-center justify-end h-16 px-4">
            <>
                <Drawer />
            </>
        </div>
    )
}

export default Mobile