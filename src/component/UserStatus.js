import React, {Component} from 'react';

export default class ProfileStatus extends Component {
    render() {
        return (
            <div className="user-status">
                <div className="menu-status">
                    <div className="status-item">
                        <div className="status-text" onClick={this.onClick}>
                            <i className="fas fa-circle green"></i>
                            Activo
                        </div>
                    </div>
                    <div className="divider-vertical"></div>
                    <div className="status-item">
                        <div className="status-text">
                            <i className="fas fa-moon yellow"></i>
                            Ausente
                        </div>
                    </div>
                    <div className="status-item">
                        <div className="status-text">
                            <i className="fas fa-coffee brown"></i>
                            Ocupado
                            <div className="status-helper">
                                No se te notificarán los mensajes de ningún chats.
                            </div>
                        </div>
                    </div>
                    <div className="status-item">
                        <div className="status-text">
                            <i className="far fa-circle"></i>
                            Desconectado
                            <div className="status-helper">
                                Podrás seguir utilizando el chat, pero tus amigos no podrán verte en línea
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
