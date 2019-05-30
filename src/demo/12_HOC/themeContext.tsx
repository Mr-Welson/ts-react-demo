import * as React from 'react';

export interface IThemeContext {
  theme: string
  changeTheme(theme: string): void
}

export const createThemeContext = (): IThemeContext => ({
  theme: 'light',
  changeTheme: () => {}
})

export const ThemeContext = React.createContext<IThemeContext>(createThemeContext());

export class ThemeProvider extends React.Component<{}, IThemeContext> {
  constructor(props:{}){
    super(props);
    this.state ={
      theme: createThemeContext().theme,
      changeTheme: this.changeTheme
    }
  }

  changeTheme = (theme: string) => {
    this.setState({
      theme
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        { this.props.children }
      </ThemeContext.Provider>
    )
  }
}

export const withThemeContext = (Wrapper: React.ElementType) => (props: any) => (
  <ThemeContext.Consumer>
    {
      ({theme, changeTheme}) => (
        <Wrapper
          {...props}
          theme={theme}
          changeTheme={changeTheme}
        />
      )
    }
  </ThemeContext.Consumer>
)
