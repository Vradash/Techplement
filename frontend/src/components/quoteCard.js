const QuoteCard = (props) => {
  return (
    <>
      <div className="quotecard-wrapper">
        <div className="quotecard-content">
          <h3>{props.data.text}</h3>
          <h4> -{props.data.author?.split(',')[0]}</h4>
        </div>
      </div>
    </>
  )
}

export default QuoteCard;
