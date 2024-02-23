
import { TReview } from "@/data/data"

export const ListAvaliações: React.FC<{ userAvaliacoes: TReview }> = ({
    userAvaliacoes,
  }) => {
    return (
      <ul className="border-1 border-dotted border-green-400">
        
        {userAvaliacoes.map((avaliacao) => {
        console.log('UMA AVALIACAO É', avaliacao)
          return <li>JSON.stringify{avaliacao}</li>
        })}
      </ul>
    )
  }