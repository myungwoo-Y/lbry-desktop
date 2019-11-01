// @flow
import React from 'react';
import TransactionList from 'component/transactionList';
import Page from 'component/page';

type Props = {
  fetchTransactions: (page, pageSize) => void,
  fetchingTransactions: boolean,
  filteredTransactionPage: Array<{}>,
  filteredTransactionsCount: number,
};

class TransactionHistoryPage extends React.PureComponent<Props> {
  componentDidMount() {
    const { fetchTransactions } = this.props;

    fetchTransactions(1, 999999);
  }

  render() {
    const { filteredTransactionPage, filteredTransactionsCount } = this.props;

    return (
      <Page>
        <section className="card">
          <TransactionList
            transactions={filteredTransactionPage}
            transactionCount={filteredTransactionsCount}
            title={__('Transaction History')}
          />
        </section>
      </Page>
    );
  }
}

export default TransactionHistoryPage;
