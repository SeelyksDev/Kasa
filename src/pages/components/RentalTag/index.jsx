import './tag.scss'

const Tag = ({ tagText }) => {
      return (
            <div className="tagsContainer__tag">
                  <span className="tagsContainer__text">{tagText}</span>
            </div>
      )
}

export default Tag
