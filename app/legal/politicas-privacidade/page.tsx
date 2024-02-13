import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="w-2/4 mx-auto px-4 py-8">
            <h1 className="text-2xl font-semibold mb-4">Políticas de Privacidade</h1>
            <p className="text-gray-700 mb-4">
                A sua privacidade é importante para nós. É política do Barzim respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <Link href="https://barzim.tech"><span className="text-blue-500 hover:underline">Barzim</span></Link>, e outros sites que possuímos e operamos.
            </p>
            <p className="text-gray-700 mb-4">
                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
            </p>
            <p className="text-gray-700 mb-4">
                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
            </p>
            <p className="text-gray-700 mb-4">
                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
            </p>
            <p className="text-gray-700 mb-4">
                O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
            </p>
            <p className="text-gray-700 mb-4">
                Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
            </p>
            <p className="text-gray-700 mb-4">
                O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.
            </p>
            <h3 className="text-xl font-semibold mb-2">Compromisso do Usuário</h3>
            <p className="text-gray-700 mb-4">
                O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Barzim oferece no site e com caráter enunciativo, mas não limitativo:
            </p>
            <ul className="list-disc ml-6 text-gray-700 mb-4">
                <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Barzim, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Mais Informações</h3>
            <p className="text-gray-700 mb-4">
                Esperamos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
            </p>
            <p className="text-gray-700">
                Esta política é efetiva a partir de 13 de fevereiro de 2024 às 13:10.
            </p>
        </div>
    );
}
