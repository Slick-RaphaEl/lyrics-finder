function LyricsBox({results}) {
  return (
    <div className="mt-10">
      <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] md:pr-14 lg:pl-52 lg:pr-52">
        <p className="text-3xl whitespace-pre-line">
            {results.lyrics}
        </p>
      </div>
    </div>
  );
}

export default LyricsBox;