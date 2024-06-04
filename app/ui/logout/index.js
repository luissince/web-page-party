'use client'

import { signOut } from "next-auth/react"

export default function Button() {
    return (
        <button
            className="bg-white text-black py-3 px-5 rounded-2xl"
            onClick={() => signOut()}>
            Salir
        </button>
    );
}

