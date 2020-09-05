import * as React from 'react';

export interface GroupData {
    TITLE: string
    DESCRIPTION: string,
}

export interface AppProps {
    data: GroupData[]
}

export class App extends React.Component<AppProps> {
    constructor(props: AppProps) {
        super(props);
    }

    render(): JSX.Element {
        const tableCells = this.props.data.map((g) => {
            return <tr>
                <td>{g.TITLE}</td>
            </tr>
        })

        return (
            <table>
                <tr>
                    Title
                </tr>
                { tableCells }
            </table>
        )
    }
}