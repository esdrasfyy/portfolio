import ScratchCard from 'react-scratchcard-v2';
import bgCover from "../../public/791.jpg";

export const WorkSection = () => {
  const scratchConfig = {
    height: 777, // valor inicial, mas será ajustado pelo container
    image: bgCover,
    finishPercent: 70,
    onComplete: () => console.log("Complete! 🎉"),
  };

  return (
    <section id="work" className="h-screen py-28 w-full">
      <div className="flex h-[550px] max-w-[550px] w-full gap-4 mx-auto relative">
        {/* Coluna 1 */}
        <div className="flex flex-col h-full w-full gap-4">
          <div className="h-2/3 w-full border border-gray-500 rounded-lg overflow-hidden">
            <ScratchCard {...scratchConfig} width={420} height={777}>
              <div className="flex w-full h-full items-center justify-center">
                <h1>Scratch card</h1>
              </div>
            </ScratchCard>
          </div>
          <div className="h-1/3 w-full border border-gray-500 rounded-lg overflow-hidden">
            <ScratchCard {...scratchConfig} width={420} height={777}>
              <div className="flex w-full h-full items-center justify-center">
                <h1>Scratch card</h1>
              </div>
            </ScratchCard>
          </div>
        </div>

        {/* Coluna 2 */}
        <div className="flex flex-col h-full w-full gap-4">
          <div className="h-2/5 w-full border border-gray-500 rounded-lg overflow-hidden">
            <ScratchCard {...scratchConfig} width={420} height={777}>
              <div className="flex w-full h-full items-center justify-center">
                <h1>Scratch card</h1>
              </div>
            </ScratchCard>
          </div>
          <div className="h-3/5 w-full border border-gray-500 rounded-lg overflow-hidden">
            <ScratchCard {...scratchConfig} width={420} height={777}>
              <div className="flex w-full h-full items-center justify-center">
                <h1>Scratch card</h1>
              </div>
            </ScratchCard>
          </div>
        </div>

        {/* Coluna 3 */}
        <div className="h-full w-full border border-gray-500 rounded-lg overflow-hidden">
          <ScratchCard {...scratchConfig} width={420} height={777}>
            <div className="flex w-full h-full items-center justify-center">
              <h1>Scratch card</h1>
            </div>
          </ScratchCard>
        </div>

        {/* Coluna 4 */}
        <div className="flex flex-col h-full w-full gap-4">
          <div className="h-2/3 w-full border border-gray-500 rounded-lg overflow-hidden">
            <ScratchCard {...scratchConfig} width={420} height={777}>
              <div className="flex w-full h-full items-center justify-center">
                <h1>Scratch card</h1>
              </div>
            </ScratchCard>
          </div>
          <div className="h-1/3 w-full border border-gray-500 rounded-lg overflow-hidden">
            <ScratchCard {...scratchConfig} width={420} height={777}>
              <div className="flex w-full h-full items-center justify-center">
                <h1>Scratch card</h1>
              </div>
            </ScratchCard>
          </div>
        </div>

        {/* Coluna 5 */}
        <div className="flex flex-col h-full w-full gap-4">
          <div className="h-2/5 w-full border border-gray-500 rounded-lg overflow-hidden">
            <ScratchCard {...scratchConfig} width={420} height={777}>
              <div className="flex w-full h-full items-center justify-center">
                <h1>Scratch card</h1>
              </div>
            </ScratchCard>
          </div>
          <div className="h-3/5 w-full border border-gray-500 rounded-lg overflow-hidden">
            <ScratchCard {...scratchConfig} width={420} height={777}>
              <div className="flex w-full h-full items-center justify-center">
                <h1>Scratch card</h1>
              </div>
            </ScratchCard>
          </div>
        </div>
      </div>
    </section>
  );
};
