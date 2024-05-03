import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="mx-auto w-full px-4 py-8 md:w-2/4">
      <h1 className="mb-3 text-3xl">Termos e Condições de Uso</h1>
      <h2 className="mb-4 text-2xl font-semibold">1. Termos</h2>
      <p className="mb-4 text-gray-700">
        Ao acessar ao site{' '}
        <Link href="/">
          <span className="text-yellow-barzim hover:underline">Barzim</span>
        </Link>
        , concorda em cumprir estes termos de serviço, todas as leis e
        regulamentos aplicáveis e concorda que é responsável pelo cumprimento de
        todas as leis locais aplicáveis. Se você não concordar com algum desses
        termos, está proibido de usar ou acessar este site. Os materiais
        contidos neste site são protegidos pelas leis de direitos autorais e
        marcas comerciais aplicáveis.
      </p>
      <h2 className="mb-4 text-2xl font-semibold">2. Uso de Licença</h2>
      <p className="mb-4 text-gray-700">
        É concedida permissão para baixar temporariamente uma cópia dos
        materiais (informações ou software) no site Barzim, apenas para
        visualização transitória pessoal e não comercial. Esta é a concessão de
        uma licença, não uma transferência de título e, sob esta licença, você
        não pode:
      </p>
      <ol className="mb-4 ml-6 list-decimal text-gray-700">
        <li>modificar ou copiar os materiais;</li>
        <li>
          usar os materiais para qualquer finalidade comercial ou para exibição
          pública (comercial ou não comercial);
        </li>
        <li>
          tentar descompilar ou fazer engenharia reversa de qualquer software
          contido no site Barzim;
        </li>
        <li>
          remover quaisquer direitos autorais ou outras notações de propriedade
          dos materiais; ou
        </li>
        <li>
          transferir os materiais para outra pessoa ou `&quot;`espelhe`&quot;`
          os materiais em qualquer outro servidor.
        </li>
      </ol>
      <p className="mb-4 text-gray-700">
        Esta licença será automaticamente rescindida se você violar alguma
        dessas restrições e poderá ser rescindida por Barzim a qualquer momento.
        Ao encerrar a visualização desses materiais ou após o término desta
        licença, você deve apagar todos os materiais baixados em sua posse, seja
        em formato eletrônico ou impresso.
      </p>
      <h2 className="mb-4 text-2xl font-semibold">
        3. Isenção de responsabilidade
      </h2>
      <ol className="mb-4 ml-6 list-decimal text-gray-700">
        <li>
          Os materiais no site da Barzim são fornecidos `&quot;`como
          estão`&quot;`. Barzim não oferece garantias, expressas ou implícitas,
          e, por este meio, isenta e nega todas as outras garantias, incluindo,
          sem limitação, garantias implícitas ou condições de comercialização,
          adequação a um fim específico ou não violação de propriedade
          intelectual ou outra violação de direitos.
        </li>
        <li>
          Além disso, o Barzim não garante ou faz qualquer representação
          relativa à precisão, aos resultados prováveis ou à confiabilidade do
          uso dos materiais em seu site ou de outra forma relacionado a esses
          materiais ou em sites vinculados a este site.
        </li>
      </ol>
      <h2 className="mb-4 text-2xl font-semibold">4. Limitações</h2>
      <p className="mb-4 text-gray-700">
        Em nenhum caso o Barzim ou seus fornecedores serão responsáveis por
        quaisquer danos (incluindo, sem limitação, danos por perda de dados ou
        lucro ou devido a interrupção dos negócios) decorrentes do uso ou da
        incapacidade de usar os materiais em Barzim, mesmo que Barzim ou um
        representante autorizado da Barzim tenha sido notificado oralmente ou
        por escrito da possibilidade de tais danos. Como algumas jurisdições não
        permitem limitações em garantias implícitas, ou limitações de
        responsabilidade por danos conseqüentes ou incidentais, essas limitações
        podem não se aplicar a você.
      </p>
      <h2 className="mb-4 text-2xl font-semibold">5. Precisão dos materiais</h2>
      <p className="mb-4 text-gray-700">
        Os materiais exibidos no site da Barzim podem incluir erros técnicos,
        tipográficos ou fotográficos. Barzim não garante que qualquer material
        em seu site seja preciso, completo ou atual. Barzim pode fazer
        alterações nos materiais contidos em seu site a qualquer momento, sem
        aviso prévio. No entanto, Barzim não se compromete a atualizar os
        materiais.
      </p>
      <h2 className="mb-4 text-2xl font-semibold">6. Links</h2>
      <p className="mb-4 text-gray-700">
        O Barzim não analisou todos os sites vinculados ao seu site e não é
        responsável pelo conteúdo de nenhum site vinculado. A inclusão de
        qualquer link não implica endosso por Barzim do site. O uso de qualquer
        site vinculado é por conta e risco do usuário.
      </p>
      <h3 className="mb-2 text-xl font-semibold">Modificações</h3>
      <p className="mb-4 text-gray-700">
        O Barzim pode revisar estes termos de serviço do site a qualquer
        momento, sem aviso prévio. Ao usar este site, você concorda em ficar
        vinculado à versão atual desses termos de serviço.
      </p>
      <h3 className="mb-2 text-xl font-semibold">Lei aplicável</h3>
      <p className="mb-4 text-gray-700">
        Estes termos e condições são regidos e interpretados de acordo com as
        leis do Barzim e você se submete irrevogavelmente à jurisdição exclusiva
        dos tribunais naquele estado ou localidade.
      </p>
    </div>
  )
}
