import * as React from 'react';
import Button from '@material-ui/core/Button';

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
            <>
                <Button variant="contained" color="primary">Button here!</Button>
                <table>
                    <tr>
                        Title
                    </tr>
                    { tableCells }
                </table>
            </>
        )
    }
}