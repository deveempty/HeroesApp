import { Route, Routes } from "react-router-dom"
import { HeroPage } from "../heroes/pages/HeroPage"
import { Home } from "../ui"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hero" element={<HeroPage />} />
        </Routes>
    </>
  )
}
