import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import { Home } from "./Home";


export const AnimatedScroll = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
  return (
<ScrollContainer className="bg-gray-900 text-white">
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <h1 className="animate-pulse bg-gradient-to-r bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-3xl font-extrabold text-transparent sm:text-8xl">
        Heroes Search
      </h1>
      <p className="sm:text-sm"> Ready? Scroll down! </p>
    </Animator>
  </ScrollPage>
</ScrollContainer>
  )
}
